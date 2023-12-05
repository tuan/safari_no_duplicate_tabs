import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type EnabledStatusStorage = BaseStorage<boolean> & {
  toggle: () => void;
};

const storage = createStorage<boolean>('enabled-status-storage-key', true, {
  storageType: StorageType.Local,
});

const enabledStatusStorage: EnabledStatusStorage = {
  ...storage,
  toggle: () => {
    storage.set(currentStatus => {
      return !currentStatus;
    });
  },
};

export default enabledStatusStorage;
