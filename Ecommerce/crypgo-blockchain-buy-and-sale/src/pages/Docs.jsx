import ProjectConfiguration from "../components/docs/configuration/ProjectConfiguration";
import DocsSidebar from "../components/docs/DocsSidebar";
import QuickStart from "../components/docs/quickStart/QuickStart";
import PackageStructure from "../components/docs/structure/PackageStructure";
import PackageVersions from "../components/docs/versions/PackageVersions";

const Docs = () => {
  return (
    <section className="flex relative">
      <DocsSidebar />

      <section className="w-full md:ml-64 p-6">
          <PackageVersions />
          <PackageStructure />
          <QuickStart />
          <ProjectConfiguration />
      </section>
    </section>
  );
};

export default Docs;
