const re = /^[a-z_][a-z_0-9]*$/;

export const reasonInvalidCharacter =
  'Invalid character, only lower case and numbers are allowed';

export const checkInvalidCharacter = (name: string) =>
  re.test(name)
    ? []
    : [
        {
          name,
          reason: reasonInvalidCharacter,
        },
      ];
