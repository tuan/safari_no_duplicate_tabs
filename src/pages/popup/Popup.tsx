import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import useStorage from '@root/src/shared/hooks/useStorage';
import enabledStatusStorage from '@root/src/shared/storages/enabledStatusStorage';
import { Switch } from '@headlessui/react';

const Popup = () => {
  const enabledStatus = useStorage(enabledStatusStorage);
  function handleDisabledStatusChange() {
    enabledStatusStorage.toggle();
  }

  return (
    <div className="bg-gray-50 p-4 min-w-[16rem] w-full">
      <Switch.Group>
        <div className="flex justify-between items-center ">
          <Switch
            checked={enabledStatus}
            onChange={handleDisabledStatusChange}
            className={`${
              enabledStatus ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}>
            <span
              className={`${
                enabledStatus ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
          <Switch.Label className={`ml-4 flex-1 ${enabledStatus ? 'text-black' : 'text-gray-400'}`}>
            Auto-close duplicates
          </Switch.Label>
        </div>
      </Switch.Group>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
