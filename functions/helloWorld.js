
// Each javascript file to be deployed as asynchronous service lambda function must export 
// the following handler method.
// What this does is Netlify provides the event and context parameters when the serverless
// function is invoked.
// When you call the serverless function endpoint the handler receives an event object.  The 
// context parameter contains the context in which the serverless function was called.
// This is essential!

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Hello serverless lambda functions!'})
  }
}