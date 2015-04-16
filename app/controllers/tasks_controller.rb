class TasksController < ApplicationController

  def index
    timer = Task.last.get_timer if Task.count > 0 and Task.last.isRunning?
    render json: { tasks: Task.not_running, countingTask: timer }
  end

  def create
    task = Task.new(task_params)
    task.time_stamps.build
    task.save
    render json: task.get_timer
  end

  def stop
    task = Task.find(params[:task_id])
    task.time_stamps.last.update_attribute(:end_et, Time.now)
    task.save
    render json: task
  end

  private

    def task_params
      params.require(:task).permit(:name)
    end
end
