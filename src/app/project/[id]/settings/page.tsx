"use client";
import { useState } from "react";
import Workflow from "./Workflow";

const ProjectSettingPage = () => {
  const [activeTab, setActiveTab] = useState("workflow"); // default tab

  return (
    <div className="p-3 min-h-[calc(100vh-146px)]">
      <div role="tablist" className="tabs tabs-border">
        <a
          role="tab"
          className={`tab ${activeTab === "collaborators" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("collaborators")}
        >
          Collaborators
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "workflow" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("workflow")}
        >
          Workflow
        </a>
      </div>
      <div className="p-4 min-h-[calc(100vh-200px)]">
        {activeTab === "collaborators" && (
          <div>👥 Collaborators content here</div>
        )}
        {activeTab === "workflow" && <Workflow />}
      </div>
    </div>
  );
};

export default ProjectSettingPage;
