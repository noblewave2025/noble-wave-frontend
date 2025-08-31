'use client';

import { CheckCircle, ChevronsUpDown, icons, LucideIcon } from 'lucide-react';
import { useField } from '@payloadcms/ui';
import { TextFieldClientComponent } from 'payload';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ICurrentIcon } from './types';
import { getCurrentIconOption } from './helpers';
import { LUCIDE_ICONS } from './consts';

const IconSelectField: TextFieldClientComponent = (props) => {
  const { value = '', setValue } = useField<string>({
    path: props.path,
  });

  const [open, setOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState<ICurrentIcon>({
    icon: getCurrentIconOption(value)?.icon,
  });

  const onSelectIcon = (value: string) => {
    setValue(value);
    setCurrentIcon({
      icon: getCurrentIconOption(value)?.icon,
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {currentIcon?.icon && <currentIcon.icon className="size-6" />}
          {String(value) || 'Выберите иконку...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Поиск иконки..."
            className="h-9 border-none"
          />
          <CommandList>
            <CommandEmpty>Нет иконки с таким названием.</CommandEmpty>
            <CommandGroup>
              {LUCIDE_ICONS.map((icon) => (
                <CommandItem
                  key={icon.value}
                  value={icon.value}
                  onSelect={(currentValue) => {
                    onSelectIcon(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <icon.icon className="size-6" />
                  {icon.value}
                  <CheckCircle
                    className={cn(
                      'ml-auto',
                      value === icon.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default IconSelectField;
