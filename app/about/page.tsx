export const metadata = {
  title: "About Timbo",
  description: "About Timbo visual timer",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-semibold mb-6">
        About Timbo
      </h1>

      <p className="mb-4">
        Timbo is a simple visual timer designed to help children and adults better understand time.
      </p>

      <p className="mb-4">
        It was created to support focus, daily routines and transitions between activities. 
        Instead of relying on numbers, Timbo shows time visually, making it easier to see how much time is left.
      </p>

      <p className="mb-4">
        The timer is especially helpful for children, including those with attention or concentration challenges, 
        as well as for parents and teachers who want to create structure in a simple and clear way.
      </p>

      <p className="mb-6">
        Timbo is intentionally minimal and easy to use, so that anyone can understand it instantly without instructions.
      </p>

      <p className="text-gray-500 text-sm">
        This project is continuously improved based on real user feedback.
      </p>

    </main>
  );
}