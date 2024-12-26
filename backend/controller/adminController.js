import faculty from "../models/faculty";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await faculty.findOne({ email });
    if (!user) {
      return res.send({ success: false, message: "User not Exist" });
    }
    return res.json({ success: true, message: "Login Success" });
  } catch (error) {
    console.log("userController error", error);
    res.json({ success: false, message: "Error" });
  }
};
