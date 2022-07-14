import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Box, ScrollView, Button } from 'native-base';

import { CustomInput } from '../../../components/forms';
import { EMAIL_REGEX } from '../../../global';
import { CrudLoading } from '../../../components/loading';
import { LoadingContext } from '../../../context/LoadingContext';
import { AdminContext } from '../../../context/AdminContext';

export const AdminCreateScreen = ({ route }) => {
	const { crudLoading, setCrudLoading } = useContext(LoadingContext);
	const { createAdmin } = useContext(AdminContext);
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const pwd = watch('password');

	if (crudLoading) return <CrudLoading />;

	return (
		<ScrollView h='100%' w='100%' bg='#fff'>
			<Container h='100%' w='100%' maxWidth='100%'>
				<Box width='100%' padding='5'>
					<CustomInput
						type='text'
						name='first_name'
						label='First Name'
						placeholder='First Name'
						control={control}
						rules={{ required: 'Field is required', minLength: 3 }}
						errors={errors}
					/>
					<CustomInput
						type='text'
						name='last_name'
						label='Last Name'
						placeholder='Last Name'
						control={control}
						rules={{ required: 'Field is required', minLength: 3 }}
						errors={errors}
					/>
					<CustomInput
						type='text'
						name='username'
						label='Phone'
						placeholder='Phone Number'
						control={control}
						rules={{ required: 'Field is required', minLength: 3 }}
						errors={errors}
					/>
					<CustomInput
						type='email'
						name='email'
						label='Email Address'
						placeholder='Email Address'
						control={control}
						rules={{
							required: 'Field is required',
							minLength: 3,
							pattern: { value: EMAIL_REGEX, message: 'Invalid Email' },
						}}
						errors={errors}
					/>
					<CustomInput
						type='password'
						name='password'
						label='Password'
						placeholder='Password'
						control={control}
						rules={{
							required: 'Field is required',
							minLength: {
								value: 6,
								message: 'Password should be at least 6 characters long',
							},
						}}
						errors={errors}
					/>
					<CustomInput
						type='password'
						name='cpassword'
						label='Confirm Password'
						placeholder='Confirm Password'
						control={control}
						rules={{
							required: 'Field is required',
							minLength: {
								value: 6,
								message: 'Password should be at least 6 characters long',
							},
							validate: (value) => value === pwd || 'Password do no match',
						}}
						errors={errors}
					/>
					<Button bg='blue.500' mt='3' onPress={handleSubmit(createAdmin)}>
						Create Account
					</Button>
				</Box>
			</Container>
		</ScrollView>
	);
};
