declare global {
  interface Board {
    id: string
    name: string
  }

  interface Lane {
    id: string
    name: string
    board_id: string
  }

  interface Ticket {
    id: string
    content: string
    laneId: string
  }

  interface HeaderItem {
    href: string
    label: string
  }

  interface Vote {
    id: string
    username: string
  }
}

export default {}
