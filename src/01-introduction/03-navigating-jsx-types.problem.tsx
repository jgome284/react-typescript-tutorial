export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={undefined}
      // How do I figure out what type onChange expects?
      onChange={(a) => {}}

      // How do I get autocomplete with JSX?

    />
  );
};

type Example = React.FormEventHandler<HTMLDivElement> | undefined