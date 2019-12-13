/*
 * src/controllers/auth.js
 */
const jwtHelper = require("../helpers/jwt.helper");
const md5 = require('md5');
const debug = console.log.bind(console); // tao ham debug giong console.log
const User = require("../../models/user.model");
var db = require('../../db');
var tokenList = db.get('tokenList').value();
// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token
// Trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB

// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET ||
  "access-token-secret-example-trungquandev.com-green-cat-a@";

// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret =
  process.env.REFRESH_TOKEN_SECRET ||
  "refresh-token-secret-example-trungquandev.com-green-cat-a@";
/*
 * controller postLogin
 * @param {*} req
 * @param {*} res
 */
module.exports.postLogin = async (req, res) => {
  try {
    // Mô tả lại một số bước khi làm thực tế như sau :
    // - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
    // - Nếu chưa tồn tại thì reject: User not found.
    // - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, băm ra và so sánh với mật khẩu của user lưu trong Database
    // - Nếu password sai thì reject: Password is incorrect.
    // - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.
    // Trong ví dụ demo này mình sẽ coi như tất cả các bước xác thực ở trên đều ok, mình chỉ xử lý phần JWT trở về sau thôi nhé:

    const email = req.body.email;
    const password = req.body.password;
    try{
    var user = await User.find({ email: email });
    user = user.json();
    if (!user) {
      res.status(500).json("User not found");
      return;
    }

    const hashedPassword = md5(password);
    if (hashedPassword !== user.password) {
      res.status(500).json("Password not found");
      return;
    }}catch(error) {
      console.log(error);
    }
 
    
 
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email
    };
    debug(`Thực hiện tạo mã Token, [thời gian sống 1 giờ.]`);
    const accessToken = await jwtHelper.generateToken(
      userData,
      accessTokenSecret,
      accessTokenLife
    );

    debug(`Thực hiện tạo mã Refresh Token, [thời gian sống 10 năm] =))`);
    const refreshToken = await jwtHelper.generateToken(
      userData,
      refreshTokenSecret,
      refreshTokenLife
    );

    // Lưu lại 2 mã access & Refresh token, với key chính là cái refreshToken để đảm bảo unique và không sợ hacker sửa đổi dữ liệu truyền lên.
    // lưu ý trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
    db.set(`tokenList["${refreshToken}"]`, { accessToken: accessToken, refreshToken: refreshToken }).write();

    debug(`Gửi Token và Refresh Token về cho client...`);
    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json(error);
  }
};
/*
 * controller refreshToken
 * @param {*} req
 * @param {*} res
 */
module.exports.refreshToken = async (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;
  // debug("tokenList: ", tokenList);

  // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
  if (refreshTokenFromClient && tokenList[refreshTokenFromClient]) {
    try {
      // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded
      const decoded = await jwtHelper.verifyToken(
        refreshTokenFromClient,
        refreshTokenSecret
      );
      // user's information able to be taken from decoded.data
      // command debug() to see more.
      // debug("decoded: ", decoded);
      const userData = decoded.data;
      debug(
        `Thực hiện tạo mã Token trong bước gọi refresh Token, [thời gian sống vẫn là 1 giờ.]`
      );
      const accessToken = await jwtHelper.generateToken(
        userData,
        accessTokenSecret,
        accessTokenLife
      );
      // give a new token to user
      return res.status(200).json({ accessToken });
    } catch (error) {
      // perhaps remove debug command line in practical project
      debug(error);
      res.status(403).json({
        message: "Invalid refresh token."
      });
    }
  } else {
    // if not found any token in request
    return res.status(403).send({
      message: "No token provided."
    });
  }
};
