
export const getAllAccounts = (req, res) => {
  res.status(200).json({
    success:true,
    message: "Account data fetched successfully.",
    error: false,
    data:[]
  })
}

export const createNewAccount = (req, res) => {
  res.status(201).json({
    success:true,
    message: "Account created successfully.",
    error: false,
    data:[]
  })
}

export const updateAccount = (req, res) => {
  res.status(200).json({
    success:true,
    message: "Account updated successfully.",
    error: false,
    data:[]
  })
}

export const deleteAccount = (req, res) => {
  res.status(200).json({
    success:true,
    message: "Account deleted successfully.",
    error: false,
    data:[]
  })
}