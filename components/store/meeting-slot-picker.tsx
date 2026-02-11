'use client';

import { useState, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvailableSlot {
  datetime: string;
  available: boolean;
}

interface MeetingSlotPickerProps {
  meetingId: number;
  onSlotSelected: (datetime: string) => void;
  selectedSlot?: string;
  isMobile?: boolean;
  onCancel?: () => void;
}


export function MeetingSlotPicker({
  meetingId,
  onSlotSelected,
  selectedSlot,
  isMobile = false,
  onCancel,
}: MeetingSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempSelectedSlot, setTempSelectedSlot] = useState<string | undefined>(selectedSlot);
  const timeSlotsRef = useRef<HTMLDivElement>(null);

  // Generate all demo slots for the next 14 days (not filtered by month)
  const allSlots: AvailableSlot[] = useMemo(() => {
    const demoSlots: AvailableSlot[] = [];
    const today = new Date();
    
    for (let dayOffset = 1; dayOffset < 15; dayOffset++) {
      const date = new Date(today);
      date.setDate(today.getDate() + dayOffset);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      // Generate time slots for each day (9am - 6pm)
      const hours = [9, 10, 11, 14, 15, 16, 17];
      for (const hour of hours) {
        const slotDate = new Date(date);
        slotDate.setHours(hour, 0, 0, 0);
        demoSlots.push({
          datetime: slotDate.toISOString(),
          available: true
        });
      }
    }
    
    return demoSlots;
  }, []);

  // Calculate the first available month based on slots
  const firstAvailableMonth = useMemo(() => {
    if (allSlots.length > 0) {
      const firstSlotDate = new Date(allSlots[0].datetime);
      return new Date(firstSlotDate.getFullYear(), firstSlotDate.getMonth(), 1);
    }
    return new Date();
  }, [allSlots]);

  const [currentMonth, setCurrentMonth] = useState<Date>(firstAvailableMonth);

  const monthStart = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  // Filter slots for current month view
  const slots = useMemo(() => {
    return allSlots.filter(slot => {
      const slotDate = new Date(slot.datetime);
      return slotDate >= monthStart && slotDate <= monthEnd;
    });
  }, [allSlots, monthStart, monthEnd]);

  const isLoading = false;

  const slotsByDate = slots.reduce((acc, slot) => {
    const date = new Date(slot.datetime).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(slot);
    return acc;
  }, {} as Record<string, AvailableSlot[]>);

  const datesWithSlots = Object.keys(slotsByDate).filter((dateStr) =>
    slotsByDate[dateStr].some((s) => s.available)
  );

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const startDay = firstDayOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = lastDayOfMonth.getDate();

  const calendarDays: (Date | null)[] = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const handleDateClick = (date: Date) => {
    const dateStr = date.toDateString();
    if (datesWithSlots.includes(dateStr)) {
      setSelectedDate(date);
      setTimeout(() => {
        timeSlotsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleSlotClick = (datetime: string) => {
    setTempSelectedSlot(datetime);
  };

  const handleConfirm = () => {
    if (tempSelectedSlot) {
      onSlotSelected(tempSelectedSlot);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const todaySlotsAvailable =
    selectedDate &&
    slotsByDate[selectedDate.toDateString()]?.filter((s) => s.available);

  const monthName = currentMonth.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  }).replace(" de ", " ");

  return (
    <div className={cn("space-y-5", isMobile && "pb-20")}>
      <div>
        <div className="flex items-start gap-3 mb-3">

        </div>
        <div className="bg-white/60 border border border-dashed rounded-lg px-3 py-2.5">
          <p className=" text-sm text-muted-foreground flex items-center gap-1.5">

            Seleccioná fecha y hora para tu reunión virtual. Recibirás un link de Google Meet automáticamente al mail de la compra
          </p>
        </div>
      </div>

      <div className="bg-white/60 border border border-dashed rounded-lg p-4">
        <div className="flex items-center justify-between ">
          <Button
            type="button"
            variant="link"
            size="sm"
            onClick={goToPreviousMonth}
            className="h-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h4 className="font-semibold capitalize text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            {monthName}
          </h4>
          <Button
            type="button"
            variant="link"
            size="sm"
            onClick={goToNextMonth}
            className="h-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <div className="grid grid-cols-7 gap-1.5">
            {["D", "L", "M", "M", "J", "V", "S"].map((day, i) => (
              <div
                key={i}
                className="text-center text-xs font-semibold text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
            {calendarDays.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} />;
              }

              const dateStr = date.toDateString();
              const hasSlots = datesWithSlots.includes(dateStr);
              const isSelected =
                selectedDate?.toDateString() === date.toDateString();
              const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
              const isToday = date.toDateString() === new Date().toDateString();

              if (isLoading && !isPast) {
                return (
                  <div key={index} className="aspect-square flex items-center justify-center">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateClick(date)}
                  disabled={!hasSlots || isPast}
                  className={cn(
                    "aspect-square rounded-full text-sm font-medium transition-all relative",
                    "flex items-center justify-center",
                    isSelected &&
                    "bg-accent text-accent-foreground shadow-md scale-110 z-10",
                    !isSelected && hasSlots && !isPast &&
                    "bg-success-light text-success-foreground hover:bg-success/10 hover:scale-105 border border-success border-dashed",
                    !isSelected && !hasSlots && !isPast &&
                    "text-muted-foreground/50 hover:bg-muted/30",
                    isPast && "text-muted-foreground/20 cursor-not-allowed",
                    !hasSlots && !isPast && "cursor-default"
                  )}
                >
                  {date.getDate()}
                  {isToday && !isSelected && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          {!isLoading && datesWithSlots.length > 0 && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-3 h-3 bg-success-light border-2 border-success rounded" />
                {datesWithSlots.length} {datesWithSlots.length === 1 ? "día disponible" : "días disponibles"}
              </p>
            </div>
          )}
          {isLoading && (
            <div className="mt-3 pt-3 border-t border-border">
              <Skeleton className="h-4 w-32" />
            </div>
          )}
        </div>

        {!isLoading && (
          <>

            {selectedDate && todaySlotsAvailable && (
              <div ref={timeSlotsRef} className="space-y-3 animate-fade-in mt-3">
                <div className="flex items-center gap-2">

                  <p className="text-sm text-muted-foreground">
                    Horarios -{" "}
                    <span className="text-muted-foreground font-normal capitalize">
                      {selectedDate.toLocaleDateString("es-AR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                  {todaySlotsAvailable.map((slot, index) => {
                    const time = new Date(slot.datetime).toLocaleTimeString(
                      "es-AR",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    );
                    const isSelectedSlot = tempSelectedSlot === slot.datetime;

                    return (
                      <button
                        key={slot.datetime}
                        type="button"
                        onClick={() => handleSlotClick(slot.datetime)}
                        style={{ animationDelay: `${index * 50}ms` }}
                        className={cn(
                          "p-2 rounded-lg text-sm font-medium transition-all",
                          "flex items-center justify-center gap-1.5",
                          "opacity-0 animate-slide-up",
                          isSelectedSlot
                            ? "bg-accent text-accent-foreground shadow-md scale-105"
                            : "bg-success-light text-success-foreground hover:bg-success/10 hover:scale-105 border border-success border-dashed"
                        )}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    {todaySlotsAvailable.length} {todaySlotsAvailable.length === 1 ? "horario disponible" : "horarios disponibles"}
                  </p>
                </div>
              </div>

            )}
          </>
        )}
      </div>
      {isMobile ? (
        <div className="fixed bottom-0 left-0 right-0 bg-background p-4 flex gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCancel}
            className="flex-1 bg-transparent border-2 border-border hover:bg-muted"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handleConfirm}
            disabled={!tempSelectedSlot}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Confirmar
          </Button>
        </div>
      ) : (
        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCancel}
            className="flex-1 bg-transparent border-2 border-border hover:bg-muted"
          >
            Cancelar
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handleConfirm}
            disabled={!tempSelectedSlot}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Confirmar
          </Button>
        </div>
      )}
    </div>
  );
}
