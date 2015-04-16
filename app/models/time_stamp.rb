class TimeStamp < ActiveRecord::Base
  belongs_to :task

  before_create :set_start_at
  def set_start_at
    self.start_at = Time.now
  end
end
