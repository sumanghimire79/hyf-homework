

// Question2: Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function callAfterProvidedTime(resolveAfter) {
  return new Promise((resolve, reject) => {

    const resolveMsg = `Fullfilled: logged out after ${resolveAfter} sec. `;
    const rejectMsg = `Rejected: logged out after  ${resolveAfter} sec. `;

    setTimeout(() => {
      resolve(resolveMsg);// order of these two function matter?? seems yes !
      reject(rejectMsg);// if reject function is placed before resolve  , it is executed first 
    }, resolveAfter * 1000);

  });
  // return myPromise;
}

// consuming Promise using .then function and .catch function
callAfterProvidedTime(3).then((resolveMsgdata) => {
  console.log(`.then resolved Promise:`,`I am called asynchronously ${resolveMsgdata}`); // logged out after the indicated seconds
}).catch((rejectMsgData) => {
  console.log(`.catch rejected Promise:`,`I am called asynchronously ${rejectMsgData}`);
});

// Question: When you have written the promise, use it with async/await
// consuming Promise asyncAwait way using try and catch block
; (async () => {
  try {
    const resolvedata = await callAfterProvidedTime(5);
    console.log(`AsyncAwait:`,`I am called asynchronously ${resolvedata}`);
  } catch (error) {
    console.log(`AsyncAwait:`,`I am called asynchronously ${error}`);
  }
})();