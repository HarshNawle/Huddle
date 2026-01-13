import { PlusIcon } from 'lucide-react';
import {
    RippleButton,
    RippleButtonRipples,
    type RippleButtonProps,
} from '@/components/animate-ui/components/buttons/ripple';

interface RippleButtonDemoProps {
    variant: RippleButtonProps['variant'];
    size: RippleButtonProps['size'];
    buttonName: string;
}

const RippleButtonDemo = ({
    variant,
    size,
    buttonName,
}: RippleButtonDemoProps) => {
    return (
        <RippleButton variant={variant} size={size} className="w-full">
            {size === 'icon' ? <PlusIcon /> : buttonName}
            <RippleButtonRipples />
        </RippleButton>
    );
}

export default RippleButtonDemo
