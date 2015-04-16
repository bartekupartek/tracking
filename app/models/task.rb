class Task < ActiveRecord::Base
  has_many :time_stamps

  def isRunning?
    self.time_stamps.last.end_et.nil?
  end

  def get_timer
    attributes.merge({timer: time_stamps.last.start_at.to_i * 1000, isCounting: true})
  end

  def updated_at_int
    self.updated_at.to_i
  end

  def task_dates_to_s
    "start: #{self.time_stamps.last.start_at.strftime("%B %d, %Y %H:%M %p")}"
  end

  def as_json(options = {})
    super(options.merge(:methods => [:updated_at_int, :task_dates_to_s]))
  end

  def self.get_grouped_by_day
  end

  def self.not_running
    self.all.reject{|t| t.isRunning?}
  end

end
