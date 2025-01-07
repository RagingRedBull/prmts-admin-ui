import { createFileRoute } from '@tanstack/react-router'
import { Text } from "@mantine/core";

export const Route = createFileRoute('/floors/')({
  component: () => {
    return (
      <>
        <Text fw={700}>Hello</Text>
      </>
    )
  },
})
