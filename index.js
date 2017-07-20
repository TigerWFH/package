let o = {
  name: "monkey",
  getName: () => {
    return o.name;
  },
  setName: (name) => {
    o.name = name;
  }
}

export { o } ;