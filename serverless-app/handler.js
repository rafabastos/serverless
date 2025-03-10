exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Deploy is working v2!",
    }),
  };
};
