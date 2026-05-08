Question-3:
How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).
Answer:
Pick এবং Omit হলো utility type যেটি main type থেকে নির্দিষ্ট কিছু property নিয়ে নতুন type তৈরি করতে সাহায্য করে, যার ফলে একই structure বারবার লিখতে হয় না। এভাবে code duplication কমে এবং DRY principle বজায় থাকে।

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

Pick ব্যবহার করা হয় যখন main type থেকে শুধুমাত্র কিছু নির্দিষ্ট property দরকার হয়। এইখানে ProductSummery তে শুধু মাত্র id, name, price এই ৩ টা property দিয়ে ProductSummery এর type বানানো হইসে  
type ProductSummery = Pick<Product, "id" | "name" | "price">;

Omit ব্যবহার করা হয় যখন কিছু property বাদ দিয়ে বাকি property নিয়ে নতুন type তৈরি করতে হয়। 
এইখানে stock বাদ দিয়ে বাকি ৪ টা property নিয়ে নতুন করে type বানানো 
type ProductSummeryWithoutStock = Omit<Product, "stock" >;

এভাবে main type একবারই declare করা লাগে এবং প্রয়োজন অনুযায়ী বিভিন্ন Slice তৈরি করা যায়। ফলে code ক্লিন হয়,easily maintainable হয়  এবং scalable হয়
