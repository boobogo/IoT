import React from 'react';
import * as Tab from '@radix-ui/react-tabs';

export default function TabsComponent() {
  return (
    <div>
      <Tab.Root defaultValue="tab1">
        <Tab.List>
          <Tab.Trigger value="tab1">Tab 1</Tab.Trigger>
          <Tab.Trigger value="tab2">Tab 2</Tab.Trigger>
        </Tab.List>

        <Tab.Content value="tab1">
          <p>Content for Tab 1</p>
        </Tab.Content>
        <Tab.Content value="tab2">
          <p>Content for Tab 2</p>
        </Tab.Content>
      </Tab.Root>
    </div>
  );
}