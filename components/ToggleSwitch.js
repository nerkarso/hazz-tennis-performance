import { Switch } from '@headlessui/react';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className="flex items-center pb-5">
        <Switch.Label className="w-32 mr-5 text-lg text-gray-700 dark:text-gray-400">Payment Status</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-green-500' : 'bg-red-500'
          } relative inline-flex items-center h-4 rounded-full w-8 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300`}>
          <span className={`${enabled ? 'translate-x-5' : 'translate-x-1'} inline-block w-2 h-2 transform bg-white rounded-full transition-transform`} />
        </Switch>
      </div>
    </Switch.Group>
  );
}
