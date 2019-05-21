module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  switch(true){
    case (item.enhancement >= 20):
      return{
        ...item,
        enhancement: 20
      }
    default:
      return{
        ...item,
        enhancement: item.enhancement + 1
      }

  }
}

function fail(item) {

  switch(true){
      case (item.enhancement < 15):
        return {
          ...item, 
          enhancement: item.enhancement - 5
        }
      case (item.enhancement >= 15 && item.enhancement <= 16):
        return {
          ...item,
          enhancement: item.enhancement -10
        }
      case (item.enhancement > 16 && item.enhancement <= 20):
        return {
          ...item,
          enhancement: item.enhancement - 1
        }
  }
}

function repair(item) {
  return { 
    ...item,
    durability: 100
  };
}

function get(item) {
  switch(true) {
    case (item.enhancement > 0):
      return {
        ...item,
        name: `[+${item.enhancement}] ${item.name}`
      }
    default:
      return {
        ...item
      }
  }
}
