export const initMaster = {
  type: "",
  action: "",
  isBool: "",
  dbName: "",
};

export const typeOptions = [
  {
    value: "",
    lable: "請選擇",
  },
  {
    value: "jobclass",
    lable: "jobclass",
  },
  {
    value: "job",
    lable: "job",
  }
];

export const actionOptions = [
  {
    value: "",
    lable: "請選擇",
  },
  {
    value: "add",
    lable: "add",
  },
  {
    value: "drop",
    lable: "drop",
  },
  {
    value: "check",
    lable: "check",
  },
];

export const isBoolOptions = [
  {
    value: "",
    lable: "請選擇",
  },
  {
    value: "snapshot",
    lable: "snapshot",
  },
  {
    value: "not snapshot",
    lable: "not snapshot",
  }
];

export const dropdownStyle = {
  width: "120px",
  height: "40px",
  padding: "0 5px",
};

export const inputStyle = {
  width: "180px",
  height: "36px",
  padding: "0 5px",
};
