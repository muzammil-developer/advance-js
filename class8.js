
// Example Of Handling PROMISES

const fetchUserDataWithPromise = () => {
    console.log("fetching user data");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user post has been fetched successfully");
        }, 1500);
    });
};

const fetchUserPostWithPromise = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user post has been fetched successfully");
        }, 1500);
    });
};

fetchUserDataWithPromise()
    .then((successMessage) => {
        console.log(successMessage);
        return fetchUserDataWithPromise(34234);
    })
    .then((successMessage2) => {
        console.log(successMessage2);
    })
    .catch((err) => {
        console.log(err);
    });


// Example of handling promises using async await

const fetchUserDataAndPost = async () => {
    try {
        const userDataResponse = await fetchUserDataWithPromise();
        const userPostResponse = await fetchUserDataWithPromise();
    } catch (error) {
        console.log(error);
    }
};

fetchUserDataAndPost();



//  EVENT LOOP 


