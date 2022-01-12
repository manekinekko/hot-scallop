module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { time: new Date().toLocaleString() }
  };
};
