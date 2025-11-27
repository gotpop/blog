import type {
  ConfigStoryblok,
  FormInputButtonSubmitStoryblok,
} from "@/types/storyblok-components"
import "./FormInputButtonSubmit.css"
import type { IconName } from "@gotpop/system"
import { Icon } from "@gotpop/system"

interface FormInputButtonSubmitProps {
  blok: FormInputButtonSubmitStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputButtonSubmit({ blok }: FormInputButtonSubmitProps) {
  const label = blok.button_text ?? "Send"

  const icon =
    blok.icon_button && blok.icon_button.length > 0
      ? (blok.icon_button[0].icon_picker as IconName | undefined)
      : undefined

  const iconMarkup = icon ? <Icon name={icon} size={16} /> : null

  return (
    <div className="form-input-button-submit">
      <button type="submit" className="form-submit-button" aria-label={label}>
        <span className="text">{label}</span>
        {iconMarkup}
      </button>
    </div>
  )
}
