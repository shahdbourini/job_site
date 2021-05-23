import JobBoardCom from '../components/job-boardCom/JobBoardCom';
import React, { useState, useEffect } from 'react';
import DragDrop from '../components/drag-and-drop/DragDrop';

function JobBoard(props) {
  var results = '';
  const [job, setJob] = useState();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [resultTemp, setResultTemp] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: '1',
      name: 'Shahd Bourini',
      special: 'computer Engineer',
      Interviewer: 'AhmAd M, Mosab A',
      AppliedDate: '2021-12-13',
      category: 'Applied',
    },
    {
      id: '2',
      name: 'ShBourini',
      special: 'IT',
      Interviewer: 'AhmAd M, Mosab A',
      AppliedDate: '2021-12-12',
      category: 'Applied',
    },
    {
      id: '3',
      name: 'Shahd',
      special: 'UI/UX Developer',
      Interviewer: 'AhmAd M, Mosab A',
      AppliedDate: '2020-06-06',
      category: 'Interview',
    },
    {
      id: '4',
      name: 'Shahd Bourini',
      special: 'computer Engineer',
      Interviewer: 'AhmAd M, Mosab A',
      AppliedDate: '2021-03-07',
      category: 'Phone',
    },
    {
      id: '5',
      name: 'Shahd Al-Bourini',
      special: 'IT',
      Interviewer: 'AhmAd M, Mosab A',
      AppliedDate: '2021-12-11',
      category: 'Hired',
    },
  ]);

  useEffect(() => {
    setResultTemp(tasks);
  }, [resultTemp]);

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData('id');

    let tasksNew = tasks.filter((task) => {
      if (task.id === id) {
        task.category = cat;
      }
      return task;
    });
    setTasks(tasksNew);
  };

  const selectResult = (item) => {
    setJob(item);
  };

  function onChangeStart(date, dateString) {
    console.log(date, dateString);
    setStartDate(dateString);
  }

  function onChangeEnd(date, dateString) {
    setEndDate(dateString);
  }

  const applyFilter = () => {
    if (!StartDate && !EndDate && !job) {
      results = resultTemp;
    } else if (!StartDate && !EndDate && job) {
      results = resultTemp.filter((item) =>
        item.special.toLowerCase().includes(job.toLowerCase())
      );
    } else if (!StartDate && EndDate && !job) {
      results = resultTemp.filter((item) => item.AppliedDate <= EndDate);
    } else if (StartDate && !EndDate && !job) {
      results = resultTemp.filter((item) => item.AppliedDate >= StartDate);
    } else if (StartDate && EndDate && !job) {
      results = resultTemp.filter(
        (item) => item.AppliedDate >= StartDate && item.AppliedDate <= EndDate
      );
    } else {
      results = resultTemp.filter(
        (item) =>
          item.AppliedDate >= StartDate &&
          item.AppliedDate <= EndDate &&
          item.special.toLowerCase().includes(job.toLowerCase())
      );
    }
    setTasks(results);
  };

  const resetFilter = () => {
    setTasks(resultTemp);
    setJob('');
    setStartDate('');
    setEndDate('');
  };
  return (
    <>
      <JobBoardCom
        onChangeStart={onChangeStart}
        StartDate={StartDate}
        onChangeEnd={onChangeEnd}
        selectResult={selectResult}
        job={job}
        applyFilter={applyFilter}
        resetFilter={resetFilter}
        tasks={tasks}
        onDragStart={onDragStart}
      />
      <DragDrop
        tasks={tasks}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
    </>
  );
}

export default JobBoard;
