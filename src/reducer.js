/* eslint-disable no-var */
/* eslint-disable no-case-declarations */
const initialState = {
  taskBlocks: [],
  countOfActiveTasks: 0,
  tab: 1,
  formValue: '',
  editId: -1
}

function myReducer (state = initialState, action) {
  switch (action.type) {
    case 'FORM_VALUE_CHANGED' : return {
      ...state,
      formValue: action.payload
    }

    case 'ADD_NEW_TASK' : if (state.editId >= 0) {
      const curTaskBlocks = []

      for (let i = 0; i < state.taskBlocks.length; ++i) {
        const currentTask = Object.assign({}, state.taskBlocks[i])
        if (currentTask.taskId === state.editId) { currentTask.taskName = action.payload }

        curTaskBlocks.push(currentTask)
      }

      return {
        ...state,
        taskBlocks: curTaskBlocks,
        formValue: '',
        editId: -1
      }
    }

      var newId = Math.floor(Math.random() * 1000_000_000)

      const newTask = {
        taskName: action.payload,
        taskId: newId,
        isChecked: false
      }

      return {
        ...state,
        taskBlocks: [...state.taskBlocks, newTask],
        countOfActiveTasks: state.countOfActiveTasks + 1,
        formValue: ''
      }

    // eslint-disable-next-line no-case-declarations
    case 'TOGGLE_TASK_WITH_TASKID' : const newTaskBlocks = []
      // eslint-disable-next-line no-case-declarations
      let index = -1
      for (let i = 0; i < state.taskBlocks.length; ++i) {
        const currentTask = Object.assign({}, state.taskBlocks[i])
        if (currentTask.taskId === action.payload) {
          currentTask.isChecked = !currentTask.isChecked
          index = i
        }

        newTaskBlocks.push(currentTask)
      }

      if (newTaskBlocks[index].isChecked) {
        return {
          ...state,
          taskBlocks: newTaskBlocks,
          countOfActiveTasks: state.countOfActiveTasks - 1
        }
      } else {
        return {
          ...state,
          taskBlocks: newTaskBlocks,
          countOfActiveTasks: state.countOfActiveTasks + 1
        }
      }

    case 'DELETE_TASK' : let newState = state
      if (action.payload.taskId === state.editId) {
        newState = {
          ...state,
          formValue: '',
          editId: -1
        }
      }

      if (!action.payload.isChecked) {
        newState = {
          ...newState,
          countOfActiveTasks: state.countOfActiveTasks - 1
        }
      }

      const veryNewTaskBlocks = state.taskBlocks.filter(
        function (item) {
          return item.taskId !== action.payload.taskId
        }
      )

      newState = { ...newState, taskBlocks: veryNewTaskBlocks }

      return newState

    case 'ALL_TAB_CLICKED' : return { ...state, tab: action.payload }
    case 'ACTIVE_TAB_CLICKED' : return { ...state, tab: action.payload }
    case 'COMPLETED_TAB_CLICKED' : return { ...state, tab: action.payload }
    case 'EDITID_CHANGED' : return { ...state, editId: action.payload }

    default : return state
  }
}

export default myReducer
