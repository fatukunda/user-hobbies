// Capitalize the first letter of a text
export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Validate passion levels
export const validatePassionLevels = (receivedPassionLevel: string) => {
    const acceptedOptions = ['Low', 'Medium', 'High', 'Very-High']
    const passionLevel = capitalize(receivedPassionLevel)
    if (!acceptedOptions.includes(passionLevel)) {
      return alert(`Passion level you provided is not an acceptable option.
        Acceptable options include ${acceptedOptions.toString()}
      `)
    }
}
