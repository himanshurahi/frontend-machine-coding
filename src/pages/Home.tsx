import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">New Page</h2>

          <div className="space-y-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">New Page</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
