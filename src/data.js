const data = new Array(20000).fill(0).map((item, index) => index === 19999 ? { value: true, index: 19999,list:"yes" } : { value: 0 });
export default data;