export const googleForm = {
  action:
    'https://docs.google.com/forms/d/e/1FAIpQLSfOT4P8wKXbY5GZxcBcBL1-CIQqS73Y2Ntau7giT4N_s3sHDA/formResponse',
  entries: {
    name: 'entry.1300941263',
    email: 'entry.2089505481',
    attendance: 'entry.1751950401',
    note: 'entry.311674438',
  },
} as const

export async function submitRsvpToGoogle(data: {
  name: string
  email: string
  attendance: string
  note: string
}) {
  const body = new URLSearchParams({
    [googleForm.entries.name]: data.name.trim(),
    [googleForm.entries.email]: data.email.trim(),
    [googleForm.entries.attendance]: data.attendance,
    [googleForm.entries.note]: data.note.trim(),
  })

  await fetch(googleForm.action, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
}
