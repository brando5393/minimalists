// Enhanced localStorage with error handling and backup
class OfflineStorage {
  static STORAGE_KEY = 'todos';
  static BACKUP_KEY = 'todos_backup';

  // Save todos with backup
  static saveTodos(todos) {
    try {
      const todosString = JSON.stringify(todos);
      
      // Save main copy
      localStorage.setItem(this.STORAGE_KEY, todosString);
      
      // Save backup copy
      localStorage.setItem(this.BACKUP_KEY, todosString);
      
      return true;
    } catch (error) {
      console.error('Failed to save todos:', error);
      return false;
    }
  }

  // Load todos with fallback to backup
  static loadTodos() {
    try {
      // Try to load main copy
      const todos = localStorage.getItem(this.STORAGE_KEY);
      if (todos) {
        return JSON.parse(todos);
      }
      
      // Fallback to backup if main is corrupted
      const backup = localStorage.getItem(this.BACKUP_KEY);
      if (backup) {
        console.log('Loading from backup storage');
        return JSON.parse(backup);
      }
      
      return [];
    } catch (error) {
      console.error('Failed to load todos:', error);
      
      // Try backup as last resort
      try {
        const backup = localStorage.getItem(this.BACKUP_KEY);
        if (backup) {
          console.log('Loading from backup after main failed');
          return JSON.parse(backup);
        }
      } catch (backupError) {
        console.error('Backup also failed:', backupError);
      }
      
      return [];
    }
  }

  // Check if storage is available
  static isStorageAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }

  // Get storage usage info
  static getStorageInfo() {
    if (!this.isStorageAvailable()) {
      return { available: false, used: 0, remaining: 0 };
    }

    try {
      const used = new Blob(Object.values(localStorage)).size;
      const remaining = (5 * 1024 * 1024) - used; // Assume 5MB limit
      
      return {
        available: true,
        used: Math.round(used / 1024), // KB
        remaining: Math.round(remaining / 1024) // KB
      };
    } catch (error) {
      return { available: true, used: 0, remaining: 0, error: error.message };
    }
  }
}

export default OfflineStorage;
