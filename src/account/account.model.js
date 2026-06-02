import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Account name is required field!"],
      minlength: [2, "Account name should be atleast 2 characters long!"],
      maxlength: [30, "Account name should not exceed 30 characters!"],
      index:true
    },
    initial_amount: {
      type: Number,
      required: [true, "Initial amount is required!"],
      default:0
    },
    icon: {
      type: String,
      trim: true,
      required:[true, "Icon is required!"]
    },
    date: {
      type: Date,
      default:Date.now
    }
  },
  {
    timestamps: true,
  },
);

const account = monggose.model("Account", accountSchema);
export default account;
