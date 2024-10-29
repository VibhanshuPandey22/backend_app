//PROMISES METHOD - RESOLVE-REJECT/CATCH METHOD

const asyncHandler = (requestHandler) => (req, res, next) =>
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));

//requestHandler - any function(get, post route etc) that we want to wrap in a trycatch

export { asyncHandler };

/*
TRY-CATCH METHOD

const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

asyncHandler is a function that takes another function func as a parameter.
It returns a new async function that wraps around func.
The main job of this wrapper is to catch any errors that might happen when func is executed.
*/

/*
USE CASE

app.get(
  '/some-route',
  asyncHandler(async (req, res) => {
    const data = await someAsyncFunction();
    res.send(data);
  })
);
*/
