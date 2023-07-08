import { Tab } from "@headlessui/react";
import Creatativemember from "./MemberTeam/Creatativemember";
import EventCodinator from "./MemberTeam/EventCodinator";
import TechnicalTeam from "./MemberTeam/technicalTeam";
import SPONSERMEMBER from "./MemberTeam/SPONSERMEMBER";
import SPORTSMEMBER from "./MemberTeam/SPORTSMEMBER";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TeamMember() {
  return (
    <div className="w-full px-2 py-9 mb-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-amber-400 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            CREATIVE MEMBER
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            TECHNICAL MEMBER
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            EVENT-CODINATOR MEMBER
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            SPORTS MEMBER
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            SPONSER MEMBER
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Creatativemember />
          </Tab.Panel>
          <Tab.Panel>
            <TechnicalTeam />
          </Tab.Panel>
          <Tab.Panel>
            <EventCodinator />
          </Tab.Panel>
          <Tab.Panel>
            <SPORTSMEMBER/>
          </Tab.Panel>
          <Tab.Panel><SPONSERMEMBER /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
