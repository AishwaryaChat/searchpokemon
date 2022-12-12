import { ErrorBoundary } from "react-error-boundary";

function PokemonErrorBoundary(
  props: any
) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}

export default PokemonErrorBoundary;

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
