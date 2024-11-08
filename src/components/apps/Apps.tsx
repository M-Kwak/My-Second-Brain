import React from "react";
import { app } from "../../types/types";
import ArchiveApp from "../archiveApp/ArchiveApp";
import CalendarApp from "../calendarApp/CalendarApp";
import TodoApp from "../todoApp/TodoApp";
import VaultApp from "../vaultApp/VaultApp";

interface AppsSpecs {
  selectedApp: app | null,
}

function Apps(props: AppsSpecs) {
  const { selectedApp } = props;

  return (
    <>
      {(() => {
        switch (selectedApp?.name as app | string) {
          case 'archive':
            return <ArchiveApp />
            break;
          case 'vault':
            return <VaultApp />
            break;
          case 'calendar':
            return <CalendarApp />
            break;
          case 'to-do':
            return <TodoApp />
            break;
          case 'progress':
            break;
        }
      })()}
    </>
  )
}

export default Apps;
