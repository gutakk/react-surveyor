type Headers = {
  'Content-Type'?: string
}

const postWithJsonBodyHeaders = (): Headers => {
  return {
    'Content-Type': 'application/json'
  }
}

export { postWithJsonBodyHeaders }
