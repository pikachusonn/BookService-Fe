/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import CommonAvatar from "../components/CommonAvatar";
import { GoArrowRight } from "react-icons/go";
export default function Home() {
  const updateData = [
    {
      type: "update",
      user: {
        name: "Son Chu",
        avatar:
          "https://pbs.twimg.com/amplify_video_thumb/1906368883507724289/img/qPGs7PPqJ156dpWj.jpg",
      },
      task: {
        code: "DP-35",
        name: "Select Project - UI",
      },
      changes: [
        { field: "description", oldValue: "wakeup super", newValue: "blocked" },
        { field: "start date", oldValue: "02/09/2025", newValue: "03/09/2025" },
      ],
    },
    {
      type: "update",
      user: {
        name: "Linh Tran",
        avatar:
          "https://pbs.twimg.com/amplify_video_thumb/1906368883507724289/img/qPGs7PPqJ156dpWj.jpg",
      },
      task: {
        code: "DP-40",
        name: "API Integration",
      },
      changes: [
        { field: "status", oldValue: "In Progress", newValue: "Review" },
        { field: "priority", oldValue: "Low", newValue: "High" },
      ],
    },
    {
      type: "update",
      user: {
        name: "Khang Le",
        avatar:
          "https://pbs.twimg.com/amplify_video_thumb/1906368883507724289/img/qPGs7PPqJ156dpWj.jpg",
      },
      task: {
        code: "DP-42",
        name: "Authentication Service",
      },
      changes: [
        { field: "assignee", oldValue: "Unassigned", newValue: "Khang Le" },
        { field: "due date", oldValue: "03/09/2025", newValue: "05/09/2025" },
      ],
    },
    {
      type: "update",
      user: {
        name: "Mai Nguyen",
        avatar:
          "https://pbs.twimg.com/amplify_video_thumb/1906368883507724289/img/qPGs7PPqJ156dpWj.jpg",
      },
      task: {
        code: "DP-50",
        name: "Dashboard Analytics",
      },
      changes: [
        {
          field: "tags",
          oldValue: "analytics",
          newValue: "analytics,reporting",
        },
        {
          field: "description",
          oldValue: "initial draft",
          newValue: "added graphs",
        },
      ],
    },
    {
      type: "update",
      user: {
        name: "David Pham",
        avatar:
          "https://pbs.twimg.com/amplify_video_thumb/1906368883507724289/img/qPGs7PPqJ156dpWj.jpg",
      },
      task: {
        code: "DP-55",
        name: "Notification System",
      },
      changes: [
        { field: "status", oldValue: "Backlog", newValue: "In Progress" },
      ],
    },
  ];

  const router = useRouter();

  return (
    <div className="p-4 flex justify-center gap-4 pt-4">
      <div className="w-5/12">
        <div className="collapse collapse-arrow">
          <input
            type="checkbox"
            className="peer"
            name="my-accordion-2"
            defaultChecked // 👈 opens by default
          />
          <div className="collapse-title font-semibold flex justify-between items-center">
            <span>Projects</span>
          </div>
          <div className="collapse-content text-sm">
            <div className="border-t border-b border-black/30 rounded cursor-pointer bg-base-200">
              {Array.from({ length: 3 }, (_, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      router.push(`/project/${i}`);
                    }}
                    className="flex items-center px-5 py-3 gap-3 border-t first:border-t-0 border-x border-black/30 hover:bg-black hover:text-white"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740&q=80"
                      className="w-[40px] aspect-square border border-black/10 shadow"
                      alt="logo"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Wakeup Super</h3>
                      <span>{i % 2 === 0 ? "Beoband" : "Double"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12">
        <div className="collapse collapse-arrow">
          <input
            type="checkbox"
            className="peer"
            name="my-accordion-2"
            defaultChecked // 👈 opens by default
          />
          <div className="collapse-title font-semibold flex justify-between items-center">
            <span>Recent Updates</span>
          </div>
          <div className="collapse-content text-sm">
            <div className="bg-base-200 border-t border-b border-black/30">
              {updateData?.map((data, i) => (
                <div
                  key={i}
                  className="p-3 border-t first:border-t-0 border-x border-black/30"
                >
                  <div className="flex items-start gap-3">
                    <CommonAvatar src={data?.user?.avatar} />
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                          {data?.type}
                        </span>
                        <span>the issue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-600">
                          {data?.task?.code}
                        </span>
                        <span className="font-bold">{data?.task?.name}</span>
                      </div>
                      <div>
                        {data?.changes?.map((c, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="font-semibold">{c?.field}:</span>
                            <div className="flex items-center">
                              <span className="line-through text-gray-400">
                                {c?.oldValue}
                              </span>
                              <GoArrowRight />
                              <span>{c?.newValue}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
