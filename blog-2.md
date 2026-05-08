Question-3:
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?
Answer:
Generics reusable component তৈরি করতে সাহায্য করে যা বিভিন্ন ধরনের data type নিয়ে handle করতে পারে, কিন্তু তারপরও strict type safety বজায় রাখে।

অর্থাৎ, একই function বারবার different data type এর জন্য আলাদা করে লিখতে হয় না। Generic type এ parameter ব্যবহার করে function বা component dynamic ভাবে type গ্রহণ করতে পারে।

type GenericArray<T> = Array<T>;
const names: GenericArray<string> = ["Saif", "Jibon"];
const numbers: GenericArray<number> = [1, 2, 3];
const checks: GenericArray<boolean> = [true, false];

আমার কাছে ৩ ধরনের array আছে — একটি string এর, একটি number এর এবং একটি boolean এর।
এখন আমি যদি union operator ব্যবহার না করে dynamically বলে দিতে চাই array এর মধ্যে কী ধরনের value থাকবে,
তাহলে Generics ব্যবহার করে variable declare করার সময় type set করে দিতে পারি।
ফলে একই structure different type এর data নিয়ে কাজ করতে পারে, কিন্তু type safety ঠিক থাকে

সুতরাং আমরা বলতে পারি এভাবে Generics, code reusable করে duplication কমায়, dynamically type handle
করতে সাহায্য করে type safety বজায় রাখতে সাহায্য করে।
যার ফলে large-scale TypeScript project এ clean, scalable এবং maintainable code লেখা সহজ হয়।
