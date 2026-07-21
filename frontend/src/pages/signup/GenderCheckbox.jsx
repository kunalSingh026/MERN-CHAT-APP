const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex gap-4 my-2">
            <div className="flex-1">
                <label 
                    className="brutal-label flex items-center justify-between p-3 border-3 border-black cursor-pointer font-bold select-none transition-all"
                    style={{ 
                        backgroundColor: selectedGender === "male" ? '#00FF9C' : '#FFFFFF',
                        boxShadow: selectedGender === "male" ? '4px 4px 0px #000000' : '2px 2px 0px #000000'
                    }}
                    onClick={() => onCheckboxChange("male")}
                >
                    <span>MALE_</span>
                    <div className="w-4 h-4 border-2 border-black" style={{ backgroundColor: selectedGender === "male" ? '#000000' : '#FFFFFF' }}></div>
                </label>
            </div>
            <div className="flex-1">
                <label 
                    className="brutal-label flex items-center justify-between p-3 border-3 border-black cursor-pointer font-bold select-none transition-all"
                    style={{ 
                        backgroundColor: selectedGender === "female" ? '#00FF9C' : '#FFFFFF',
                        boxShadow: selectedGender === "female" ? '4px 4px 0px #000000' : '2px 2px 0px #000000'
                    }}
                    onClick={() => onCheckboxChange("female")}
                >
                    <span>FEMALE_</span>
                    <div className="w-4 h-4 border-2 border-black" style={{ backgroundColor: selectedGender === "female" ? '#000000' : '#FFFFFF' }}></div>
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;