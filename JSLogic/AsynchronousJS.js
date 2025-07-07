// PROPER USE CASES OF REJECT IN PROMISES

// 1. BASIC EXAMPLE
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolve P1"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 failed after 2 seconds"), 2000);
});

// 2. ERROR HANDLING - Most common use case
const fetchUserData = new Promise((resolve, reject) => {
  const userId = Math.random() > 0.5 ? 123 : null;

  setTimeout(() => {
    if (userId) {
      resolve({ id: userId, name: "John Doe", email: "john@example.com" });
    } else {
      reject(new Error("User ID not found"));
    }
  }, 1000);
});

// 3. VALIDATION ERRORS
const validateAge = (age) => {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") {
      reject(new Error("Age must be a number"));
    } else if (age < 0) {
      reject(new Error("Age cannot be negative"));
    } else if (age > 150) {
      reject(new Error("Age seems unrealistic"));
    } else {
      resolve(`Valid Age ${age}`);
    }
  });
};

//Creation
const userRide = new Promise((resolve, reject) => {
  let user = Math.random() > 0.5 ? "Test" : null;

  if (user) {
    resolve("User Is present--->");
  } else {
    reject("User Not Found---->");
  }
});

//Consume
userRide
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Test Promise");
  });

// Promise Chaining
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: userId, name: "Alice" });
      } else {
        reject("User Not Found");
      }
    }, 500);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve([
          { id: 101, title: "First Post", content: "111" },

          { id: 102, title: "Second Post", content: "222" },
        ]);
      } else {
        reject(new Error("No Posts found for this User"));
      }
    }, 600);
  });
}

function getCommentsForPost(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId === 101) {
        resolve([
          { id: 201, text: "Great Post" },
          { id: 202, text: "Very insightful." },
        ]);
      }
    }, 400);
  });
}

// --- Promise Chaining in action ---
console.log("Starting promise chain...");

getUser(1)
  .then((user) => {
    console.log("User:", user.name);
    return getUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    if (posts.length > 0) {
      return getCommentsForPost(posts[0].id);
    } else {
      throw new Error("No posts to fetch comments for.");
    }
  })
  .then((comments) => {
    console.log(
      "Comments For First Post:",
      comments.map((c) => c.text)
    );
    console.log("Promise chain completed susccesfully");
  })
  .catch((err) => {
    console.log("An error occured in the chain: ", err.message);
  });

console.log("Code after initiating chain (executes immediately).");

// Async Await Syntax For this
const allPostCommnet = async () => {
  try {
    const user = await getUser(1);
    const posts = await getUserPosts(user.id);
    const comments = await getCommentsForPost(posts[0].id);
    console.log(
      "Comments For First Post:",
      comments.map((c) => c.text)
    );
  } catch (err) {
    console.log(e);
  }
};




const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved 1!"); // Removed the extra argument, setTimeout only expects a delay
    }, 100);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected 2!"); // Removed the extra argument
    }, 100);
});

async function asyncAwaitOptimized() {
    try {
        // Run both promises concurrently using Promise.all()
        // Promise.all() takes an array of promises.
        // It resolves with an array of results when all promises resolve.
        // It rejects with the reason of the first promise that rejects.
        const [result1, result2] = await Promise.all([
            promise1(), // Call the functions to get the promises
            promise2()
        ]);

        console.log(result1); // This line will only be reached if ALL promises resolve
        console.log(result2); // (which won't happen in this specific example due to promise2 rejecting)

    } catch (error) {
        // If any promise in Promise.all() rejects, the entire Promise.all() rejects
        // and the error is caught here.
        console.error("One of the promises rejected:", error);
    }
}

asyncAwaitOptimized();



// USAGE EXAMPLES WITH ERROR HANDLING

console.log("=== BASIC PROMISE HANDLING ===");

// Handle p1 (success case)
p1.then((result) => {
  console.log("P1 Success:", result);
}).catch((error) => {
  console.log("P1 Error:", error);
});

// Handle p2 (rejection case)
p2.then((result) => {
  console.log("P2 Success:", result);
}).catch((error) => {
  console.log("P2 Error:", error);
});

console.log("\n=== USER DATA FETCHING ===");

// Handle user data fetching
fetchUserData
  .then((userData) => {
    console.log("User data retrieved:", userData);
  })
  .catch((error) => {
    console.log("Failed to fetch user data:", error.message);
  });

console.log("\n=== AGE VALIDATION ===");

// Test age validation with different values
const testAges = [25, -5, 200, "invalid"];

testAges.forEach((age) => {
  validateAge(age)
    .then((result) => console.log(result))
    .catch((error) => console.log("Validation error:", error.message));
});

console.log("\n=== API CALLS ===");

// Test API calls
apiCall("/users")
  .then((response) => {
    console.log("API Success:", response);
  })
  .catch((error) => {
    console.log("API Error:", error.message);
  });

console.log("\n=== FILE OPERATIONS ===");

// Test file reading
const testFiles = ["document.txt", "nonexistent.txt", "corrupted.txt"];

testFiles.forEach((filename) => {
  readFile(filename)
    .then((content) => console.log("File read success:", content))
    .catch((error) => console.log("File read error:", error.message));
});

console.log("\n=== PROMISE CHAINING WITH ERROR HANDLING ===");

// Chain promises with error handling
validateAge(30)
  .then((ageResult) => {
    console.log("Step 1:", ageResult);
    return fetchUserData;
  })
  .then((userData) => {
    console.log("Step 2:", userData);
    return apiCall("/profile");
  })
  .then((apiResponse) => {
    console.log("Step 3:", apiResponse);
  })
  .catch((error) => {
    console.log("Chain error at some step:", error.message);
  });

console.log("\n=== PROMISE.ALL WITH MIXED RESULTS ===");

// Using Promise.all - fails if any promise rejects
Promise.all([
  timeoutPromise(1000, false),
  timeoutPromise(1500, false),
  timeoutPromise(2000, true), // This will cause Promise.all to reject
])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.log("Promise.all failed:", error.message);
  });

console.log("\n=== PROMISE.ALLSETTLED FOR HANDLING MIXED RESULTS ===");

// Using Promise.allSettled - waits for all promises regardless of outcome
Promise.allSettled([
  timeoutPromise(1000, false),
  timeoutPromise(1500, true),
  timeoutPromise(2000, false),
]).then((results) => {
  console.log("All promises settled:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected:`, result.reason.message);
    }
  });
});

console.log("\n=== ASYNC/AWAIT WITH TRY-CATCH ===");

// Using async/await for cleaner error handling
async function handlePromiseWithAsyncAwait() {
  try {
    const ageResult = await validateAge(25);
    console.log("Async age validation:", ageResult);

    const userData = await fetchUserData;
    console.log("Async user data:", userData);

    const apiResponse = await apiCall("/dashboard");
    console.log("Async API response:", apiResponse);
  } catch (error) {
    console.log("Async error caught:", error.message);
  }
}

// Execute async function
handlePromiseWithAsyncAwait();

/*
KEY POINTS ABOUT USING REJECT:

1. WHEN TO USE REJECT:
   - When an operation fails (network errors, file not found, etc.)
   - When validation fails (invalid input, business logic violations)
   - When timeouts occur
   - When external dependencies fail

2. BEST PRACTICES:
   - Always pass Error objects to reject() for better stack traces
   - Provide meaningful error messages
   - Use specific error types when needed
   - Handle rejections with .catch() or try-catch in async/await

3. ERROR TYPES:
   - System errors (file system, network)
   - Validation errors (user input)
   - Business logic errors (insufficient funds, permissions)
   - Timeout errors

4. HANDLING PATTERNS:
   - .then().catch() for individual promises
   - Promise.all() fails fast on first rejection
   - Promise.allSettled() waits for all regardless of outcome
   - async/await with try-catch for synchronous-like code

5. COMMON MISTAKES TO AVOID:
   - Not handling rejections (causes unhandled promise rejection warnings)
   - Rejecting with strings instead of Error objects
   - Not providing enough context in error messages
   - Swallowing errors without proper logging
*/
