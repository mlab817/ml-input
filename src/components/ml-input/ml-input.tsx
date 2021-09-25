import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'ml-input',
	styleUrl: 'ml-input.css',
	shadow: true
})

export class MLInput {
	@Prop() name: string

	@Prop({ mutable: true }) type: string = 'text';

	@Prop() disabled: boolean = false;

	@Prop() readonly: boolean = false;

	@Prop({ mutable: true }) value: string|number = '0';

	isEditMode(evt) {
		console.log('isEditMode')
		const value = evt.target.value
		this.type = 'number'
		
		const numericOnly = value && value.replace(/[^\d.-]/g,'') || 0
		const numberValue = numericOnly && numericOnly.replace(/,/g,'') || 0
		this.value = Number(numberValue)
	}

	isViewMode(evt) {
		console.log('isViewMode')
		const value = evt.target.value
		this.type = 'text'
		
		const numericOnly = value && value.replace(/[^\d.-]/g,'') || 0
		const numberValue = numericOnly && numericOnly.replace(/,/g,'') || 0
	  	const formatted = Number(numberValue).toLocaleString()
		this.value = formatted
	}

	connectedCallback() {
		console.log('connectedCallback')
	}

	disconnectedCallback() {
			console.log('disconnectedCallback')
	}

	render() {
		return (
			<input 
				class="form-control" 
				type={this.type} 
				name={this.name} 
				readonly={this.readonly} 
				disabled={this.disabled}  
				onBlur={this.isViewMode}
				onFocus={this.isEditMode}  />
		)
	}
}