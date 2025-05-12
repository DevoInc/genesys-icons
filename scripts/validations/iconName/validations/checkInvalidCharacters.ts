const re = /^[a-z_][a-z_0-9]*$/;

export const reasonInvalidCharacter =
  'Invalid character, only lower case, numbers (but not at the start), and underscores are allowed';

export const checkInvalidCharacter = (name: string) =>
  re.test(name)
    ? []
    : [
        {
          name,
          reason: reasonInvalidCharacter,
        },
      ];
