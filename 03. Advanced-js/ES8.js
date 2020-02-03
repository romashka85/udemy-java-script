let obj1 = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Julia',
  }

  Object.keys(obj1).forEach((key, index)=> {
      console.log(key, obj1[key])
  })

  Object.entries(obj1).map(value => {
      return value[1] + value[0].replace('username', '');
  })

