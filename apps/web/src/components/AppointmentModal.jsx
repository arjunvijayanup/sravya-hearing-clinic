import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarPlus as CalendarIcon, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  date: z.date({ required_error: 'Please select a date' }),
  message: z.string().optional(),
});

const AppointmentModal = ({ open, onOpenChange }) => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const lines = [
      "Hello! I'd like to book an appointment at Sravya Speech & Hearing Clinic.",
      '',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Preferred Date: ${format(data.date, 'PPP')}`,
    ];
    if (data.message) lines.push(`Message: ${data.message}`);

    window.open(`https://wa.me/918304885579?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    reset();
    onOpenChange(false);
  };

  const handleClose = (val) => {
    if (!val) reset();
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Book an appointment</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll send your request directly via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Enter your full name"
              className="text-foreground"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+91 XXXXX XXXXX"
              className="text-foreground"
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Preferred date *</Label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.date && <p className="text-sm text-destructive">{errors.date.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="e.g. hearing test, speech therapy, hearing aid"
              rows={4}
              className="text-foreground resize-none"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
